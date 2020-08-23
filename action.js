function countChar() {

    let count_char = document.getElementById("count_char")
    let sms = document.getElementById("sms")
    let count_sms = document.getElementById("count_sms")

    count_char.value = sms.value.length; // вывод количества введённых символов

    let latinSms = 160 // количество символов для одного латинского сообщения
    let latinSmsGluing = 153 // количество символов при склейке

    let cyrillicSms = 70;  // аналогично для кириллицы
    let cyrillicSmsGluing = 67;

    for (let i = 0; i < sms.value.length; i++) {
        if (sms.value.charAt(i).match(/^[A-Za-z]+$/) ) {
        }
    }

    let firstChar = sms.value.charAt(0) // первый символ сообщения
    let resultLatin = firstChar.match(/^[A-Za-z]+$/); // проверка на вхождение первого символа в латинский алфавит
    let resultCyrillic = firstChar.match(/^[А-Яа-яЁё]+$/); // аналогично для кириллицы

    if (resultLatin !== null) { // если латинские
        if (count_char.value <= latinSms) { // проверка на количество символов
            count_sms.value = 1 // отправка одного сообщения
        } else {
            count_sms.value = 1 + Math.ceil((count_char.value - latinSms) / latinSmsGluing) // отправка двух и более сообщений
        }
    } else if (resultCyrillic !== null) { // аналогично для кириллицы
        if (count_char.value <= cyrillicSms)
            count_sms.value = 1
        else {
            count_sms.value = 1 + Math.ceil((count_char.value - cyrillicSms) / cyrillicSmsGluing)
        }
    } else if (sms.value === '') { // проверка на наличие символов
        count_sms.value = 0
    }
}