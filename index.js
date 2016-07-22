"use strict";

const Telegram = require("telegram-node-bot");
const TelegramBaseController = Telegram.TelegramBaseController;
const tg = new Telegram.Telegram(process.env.TELEGRAM_BOT_TOKEN);

class PingController extends TelegramBaseController {
    pingHandler($) {
        $.sendMessage("pong");
    }

    get routes() {
        return {
            "ping": "pingHandler"
        }
    }
}

tg.router
    .when(["ping"], new PingController());