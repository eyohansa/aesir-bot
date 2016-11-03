"use strict";

const Telegram = require("telegram-node-bot");
const TelegramBaseController = Telegram.TelegramBaseController;
let token = process.env.TELEGRAM_BOT_TOKEN;
const tg = new Telegram.Telegram(token);

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

class RosterController extends TelegramBaseController {
    before(command, scope) {
        scope.members = [
            "Aville",
            "ilLogic",
            "Vlaicu",
            "Minerva",
            "Grimocel"
        ];

        return scope;
    }

    rosterHandler($) {
        switch($.query.game) {
            case "dota2":
                $.sendMessage()
        }
    }

    get routes() {
        return {
            "roster :game": "rosterHandler"
        }
    }
}

class UpdateController extends TelegramBaseController {
    updateHandler($) {
        $.sendMessage("Updating myself.");
    }

    get routes() {
        return {
            "update": "updateHandler"
        }
    }
}

class WhoisController extends TelegramBaseController {
    whoisHandler($) {
        $.sendMessage("")
    }

    get routes() {
        return {
            "whois :name": "whoisHandler",
            "whois": ""
        }
    }
}

tg.router
    .when(["ping"], new PingController())
    .when(["/roster", ":game"], new RosterController())
    .when(["/update"], new UpdateController())
    .when(["/whois", ":name"], new WhoisController());