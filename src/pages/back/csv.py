from flask import Flask, request, jsonify
import cv2
import numpy as np
import sqlite3


app = Flask(__name__)

def foundation(image):
  img_y_cr_cb = cv2.cvtColor(image, cv2.COLOR_BGR2YCrCb)
  y, cr, cb = cv2.split(img_y_cr_cb)
  y_eq = cv2.equalizeHist(y)
  img_y_cr_cb_eq = cv2.merge((y_eq, cr, cb))
  img_rgb_eq = cv2.cvtColor(img_y_cr_cb_eq, cv2.COLOR_YCrCb2BGR)

  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  ret, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
  hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
  ycrcb = cv2.cvtColor(image, cv2.COLOR_BGR2YCrCb)

  mask_hsv = cv2.inRange(hsv, np.array([0, 50, 80]), np.array([50, 255, 255]))
  mask_ycrcb = cv2.inRange(ycrcb, np.array([80, 133, 77]), np.array([255, 173, 127]))
  combined_mask = cv2.bitwise_or(mask_hsv, mask_ycrcb)
  combined_mask = cv2.GaussianBlur(combined_mask, (5, 5), 0)
  result = cv2.bitwise_and(image, image, mask=combined_mask)

  r = np.median(result[result[:, :, 2] != 0][:, 2])
  g = np.median(result[result[:, :, 1] != 0][:, 1])
  b = np.median(result[result[:, :, 0] != 0][:, 0])
  return r,g,b
def euclidean_distance(a, c):
  return math.sqrt(sum((e1-e2) ** 2 for e1, e2 in zip(a, b)))
def anal(r, g, b):
  conn = sqlite3.connect('foundation.db')
  cursor = conn.cursor()

  cursor.execute('SELECT * FROM foundation')
  rows = cursor.fetchall()

  min_dist = float('inf')
  close_row = None
  for row in rows:
    db_r, db_b, db_g = row[1], row[2], row[3]
    dist = euclidian_distance((r, g, b), (db_r, db_b, db_g))
    if dist < min_dist:
      min_dist = dist
      close_row = row
  conn.close()
  return close_row


@app.route('/analyze', methods=['POST'])
def analyze_image():
  file = request.files['image']
  npimg = np.fromfile(file, np.uint8)
  image = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
  r, g, b = foundation(image)
  truemup = anal(r, g, b)
  return jsonify({'Your Ideal Foundation Shade': truemup[4] if truemup else None})

if __name__ == '__main__':
  app.run(debug=True)
  
