require('dotenv').config()

let config = {}

config.urls = [
    'https://www.olx.com.br/autos-e-pecas/carros-vans-e-utilitarios/flex/estado-sp/regiao-de-ribeirao-preto/regiao-de-sao-carlos?cf=1&ctp=2&ctp=9&ctp=1&ctp=5&pe=40000&rs=30&sf=1&cad=2&fncs=1'
]

// this tool can help you create the interval string:
// https://tool.crontap.com/cronjob-debugger

config.interval = '*/5 * * * *'
config.telegramChatID = process.env.TELEGRAM_CHAT_ID
config.telegramToken = process.env.TELEGRAM_TOKEN
config.logFile = 'scrapper.log'
config.dbFile = 'ads.db'

module.exports = config