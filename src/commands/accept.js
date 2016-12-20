"use strict";
const command_1 = require("../command");
const scrimbot_1 = require("../../scrimbot");
class AcceptCommand extends command_1.Command {
    execute() {
        if (!this.validateArgs()) {
            return;
        }
        var scrim = scrimbot_1.default.scrimManager.objects.getById(this.args[0]);
        if (scrim === undefined) {
            this.message.reply('Invalid scrim ID');
        }
        else if (scrim.author == this.message.author) {
            this.message.author.sendMessage("You can't accept your own scrim");
        }
        else {
            scrim.author.sendMessage('Your scrim has been accepted!');
        }
    }
    validateArgs() {
        var error;
        if (this.args.length < 1) {
            error = 'Not enough arguments';
        }
        this.args[0] = Number(this.args[0]);
        if (!Number.isSafeInteger(this.args[0])) {
            error = `Submission is not a number: ${this.args[0]}`;
        }
        if (error) {
            this.message.reply(error);
            return false;
        }
        return true;
    }
}
exports.AcceptCommand = AcceptCommand;
