import arabic_reshaper

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

