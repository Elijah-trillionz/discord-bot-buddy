const { Client, MessageEmbed } = require('discord.js');
const { botIntents, commands, prefix } = require('./config/config');
const config = require('./config/default');

const client = new Client({
  intents: botIntents,
  partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag);
});

client.on('messageCreate', async (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return; // do nothing if prefix isn't used

  const userCmd = msg.content.slice(prefix.length);

  if (userCmd === commands.getName) {
    msg.reply(msg.author.username);
  } else if (userCmd === commands.tellJoke) {
    msg.channel.send("**HTML** bla bla bla.\nI really don't have a joke");
  } else if (userCmd === commands.sad) {
    msg.reply("Don't be sad! This is not the end of the road");
  } else if (userCmd === commands.lastMsgs) {
    const reply = await getLastMsgs(msg);
    msg.author.send({ embeds: reply });
  } else {
    msg.reply('I do not understand your command');
  }
});

const getLastMsgs = async (msg) => {
  // fetching the last 10 messages
  const res = await msg.channel.messages.fetch({ limit: 10 });

  const lastTenMsgs = res.map((message) => {
    return message.content;
  });

  const embeds = [];

  lastTenMsgs.forEach((msg, index) => {
    const embed = new MessageEmbed()
      .setColor('ORANGE') // can be hex like #3caf50
      .setTitle(`Message ${index + 1}`)
      .setDescription(`${msg}`)
      .setFooter('Buddy says Hi');

    embeds.push(embed);
  });

  return embeds;
};

const startBot = () => {
  client.login(config.DISCORD_TOKEN);
};

module.exports = startBot;
