import pyzbar.pyzbar as pyzbar
import cv2
import matplotlib.pyplot as plt

img = cv2.imread('barcode.jpg')

plt.imshow(img)

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

plt.imshow(gray, cmap="gray")

decoded = pyzbar.decode(gray)

for d in decoded:
  x, y, w, h = d.rect
  b_data = d.data.decode('utf-8')
  b_type = d.type
  
  cv2.rectangle(img, (x, y), (x + w, y + h), (0, 0, 255), 1)
  
  text = '%s (%s)' % (b_data, b_type)
  cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 255), 2, cv2.LINE_AA)

cv2.imshow('img', img)
cv2.waitKey(0)