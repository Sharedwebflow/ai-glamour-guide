from flask import Flask, request, jsonify
import cv2
import numpy as np

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

@app.route('/analyze', methods=['POST'])
def analyze_image():
  file = request.files['image']
  npimg = np.fromfile(file, np.uint8)
  image = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
  r, g, b = foundation(image)
  return jsonify({'r': r, 'b': b, 'g': g})

if __name__ == '__main__':
  app.run(debug=True)
  
