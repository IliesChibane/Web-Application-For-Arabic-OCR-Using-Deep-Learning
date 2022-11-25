import arabic_reshaper
import numpy as np
import cv2

def return_word(index):
    word = ""
    if index == 1:
        word = "عبد"
    elif index == 2:
        word = "على"
    elif index == 3:
        word = "العام"
    elif index == 4:
        word = "الله"
    elif index == 5:
        word = "الذي"
    elif index == 6:
        word = "التي"
    elif index == 7:
        word = "اليوم"
    elif index == 8:
        word = "عن"
    elif index == 9:
        word = "أو"
    elif index == 10:
        word = "الى"
    elif index == 11:
        word = "ان"
    elif index == 12:
        word = "هذا"
    elif index == 13:
        word = "هذه"
    elif index == 14:
        word = "هناك"
    elif index == 15:
        word = "هو"
    elif index == 16:
        word = "هي"
    elif index == 17:
        word = "في"
    elif index == 18:
        word = "كان"
    elif index == 19:
        word = "خلال"
    elif index == 20:
        word = "كما"
    elif index == 21:
        word = "مع"
    elif index == 22:
        word = "ما"
    elif index == 23:
        word = "من"
    elif index == 24:
        word = "محمد"
    elif index == 25:
        word = "قبل"
    elif index == 26:
        word = "قد"
    elif index == 27:
        word = "تم"
    elif index == 28:
        word = "يكون"
    return arabic_reshaper.reshape(word)[::-1]

def histo_v(im):
    w = im.shape[1]
    hist_v = np.zeros((w),np.uint16)
    for i in range(w):
        hist_v[i] = np.count_nonzero(im[:,i])
    return hist_v

def segmentation(img):
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    bw = cv2.threshold(img,0,255, cv2.THRESH_BINARY_INV+cv2.THRESH_OTSU)[1]

    hist_v = histo_v(bw)

    im_hist_v = np.zeros(img.shape,np.uint8)
    im_hist_v[:,:] = 255

    h, w = img.shape
    for i in range(0,w):
        im_hist_v[0:hist_v[i],i] = 0

    for i in range(w):
        if hist_v[i] > 20:
            break

    j = 0
    chars = []
    while j != i:
        for j in range(i,w):
            if hist_v[j] < 15:
                break
        
        if i != j:
            im = np.zeros((h,j-i),np.uint8)
            im = img[:, i:j]

            for i in range(j, w):
                if hist_v[i] > 15:
                    break
            chars.append(im)

    return chars.reverse()