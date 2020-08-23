function transliteration() {

    let sms = document.getElementById("sms")
    let check = document.getElementById("translit")
    let latinSms = []
    let eng = {}
    let cyrillicSms = [] // текущее сообщение на кириллице
    let ru = { // пара: [кириллица, латиница]
        'а': 'a', 'А': 'A', 'б': 'b', 'Б': 'B', 'в': 'v', 'В': 'V', 'г': 'g', 'Г': 'G',
        'д': 'd', 'Д': 'D', 'е': 'e', 'Е': 'E', 'ё': 'yo', 'Ё': 'Yo', 'ж': 'zh', 'Ж': 'Zh',
        'з': 'z', 'З': 'Z', 'и': 'i', 'И': 'I', 'й': 'y', 'Й': 'Y', 'к': 'k', 'К': 'K',
        'л': 'l', 'Л': 'L', 'м': 'm', 'М': 'M', 'н': 'n', 'Н': 'N', 'о': 'o', 'О': 'O',
        'п': 'p', 'П': 'P', 'р': 'r', 'Р': 'R', 'с': 's', 'С': 'S', 'т': 't', 'Т': 'T',
        'у': 'u', 'У': 'U', 'ф': 'f', 'Ф': 'F', 'х': 'h', 'Х': 'H', 'ц': 'ts', 'Ц': 'Ts',
        'ч': 'ch', 'Ч': 'Ch', 'ш': 'sh', 'Ш': 'Sh', 'щ': 'sch', 'Щ': 'Sch', 'ъ': '\'', 'Ъ': '\'',
        'ы': 'i', 'Ы': 'I', 'ь': '\'', 'Ь': '\'', 'э': 'e', 'Э': 'E', 'ю': 'yu', 'Ю': 'Yu',
        'я': 'ya', 'Я': 'Ya', '«': '"', '»': '"', '–': '-', '—': '-', '−': '-', '-': '-', // рассмотрены Тире (длинное), Короткое (среднее) тире, Минус, Дефис
        '№': '#', '`': '\'', ' ': ' ', '{': '{', '}': '}', '[': '[', ']': ']', ':': ':', // добавил некоторые символы с клавиатуры, если не успею придумать другой путь
        '\\': '\\', '|': '|', '<': '<', '>': '>', '!': '!', '?': '?', '.': '.', ',': ',',
        '~': '~', '=': '=', '(': '(', ')': ')', '*': '*',
    }


    let keys = Object.keys(ru) // собираем ключи в массив (*)

    keys.forEach(function(key){ // меняем местами ключи и значения
        let val = ru[key]
        eng[val] = key; // получаем массив для обратной транслитерации
    })

    if (check.checked === true) { // проверяем, отмечен ли чекбокс
        for (let i = 0; i < sms.value.length; i++) { // перебираем каждый символ сообщения
            for (let cyrillic in ru) { // для каждого символа ищем соответствие в таблице
                if (sms.value.charAt(i) === cyrillic) { // проверяем на совпадение символа с ключом
                    latinSms = latinSms + ru[cyrillic] // записываем символ по ключу в преобразованное сообщение
                }
            }
        }

        sms.value = latinSms
    } else {
        for (let i = 0; i < sms.value.length; i++) { // аналогично в обратном порядке
            for (let latin in eng) {
                if (sms.value.charAt(i) === 'c') {
                    i++
                } else if (sms.value.charAt(i) === 'h' && sms.value.charAt(i-1) === 'c') {
                    cyrillicSms = cyrillicSms + 'ч'
                    i++
                } else if (sms.value.charAt(i) === latin) {
                    cyrillicSms = cyrillicSms + eng[latin]
                }
            }
        }

        cyrillicSms.replace = function (regExp, ё) {
            return undefined;
        }

        let newSms = cyrillicSms.replace(/йо/g, 'ё') // исправление для большинства случаев, идеальный перевод додумать не смог
        newSms = newSms.replace(/Йо/g, 'Ё')
        newSms = newSms.replace(/зх/g, 'ж')
        newSms = newSms.replace(/Зх/g, 'Ж')
        newSms = newSms.replace(/тс/g, 'ц')
        newSms = newSms.replace(/Тс/g, 'Ц')
        newSms = newSms.replace(/цх/g, 'ч')
        newSms = newSms.replace(/Цх/g, 'Ч')
        newSms = newSms.replace(/сх/g, 'ш')
        newSms = newSms.replace(/Сх/g, 'Ш')
        newSms = newSms.replace(/сцх/g, 'щ')
        newSms = newSms.replace(/Сцх/g, 'Щ')
        newSms = newSms.replace(/йа/g, 'я')
        newSms = newSms.replace(/Йа/g, 'Я')
        newSms = newSms.replace(/ы/g, 'и')
        newSms = newSms.replace(/Ы/g, 'И')
        newSms = newSms.replace(/э/g, 'е')
        newSms = newSms.replace(/Э/g, 'Е')

        sms.value = newSms
    }
}