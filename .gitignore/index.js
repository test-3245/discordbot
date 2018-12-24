	const Discord = require('discord.js')
	
	const bot = new Discord.Client()
	
	bot.on('ready', function () {
		bot.user.setGame('Joueurs en ligne : NA/32').catch(console.error)
	})
	
	bot.login('NTE1MjE5MjU3MTk4NjQxMTUy.Dth7Ag.IuNV2acxyoz0pPlBIRhLe6e_93A')
