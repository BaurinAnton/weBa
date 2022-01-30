export default (req, res) => {
    const body = JSON.parse(req.body);
    const config = require('../../config.json');
    console.log(body);
    console.log(config);
    let fields = [
        '<b>Тебе пришел заказ:)</b>',
        '<b>Имя</b>: ' + body.name,
        '<b>Телефон</b>: ' + body.tel,
    ]
    let msg = ''
    fields.forEach(field => {
        msg += field + '\n'
    });
    msg = encodeURI(msg)
    fetch(`https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
        if (response.statusCode === 200) {
            res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' });
            alert("Статус 200")
        }
        if (response.statusCode !== 200) {
            res.status(400).json({ status: 'error', message: 'Произошла ошибка!' });
            alert("Статус 400")
        }
    });
};