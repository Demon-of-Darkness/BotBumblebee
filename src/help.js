const help = (prefix) => {
	return `> =========MENU=========
	✞⃟❐͜͡bBlublebee✞⃟♔
	*Comandos de adesivos* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo with caption\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : 
uso: responder imagem ou enviar imagem com legenda \ n
usage : responder imagem ou enviar imagem with caption\n
command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : adesivo de resposta \ n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker texto in here*\n
> *Comandos Meme* <
command : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
usage : basta enviar o comando \ n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
usage : basta enviar o comando \ n
> *Outros Comandos* <
command : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\example : *${prefix}gtts pt é que eu sou imortal kkkkk*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
usage : basta enviar o comando \ n
command : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
usage : just send the command\n
command : *${prefix}url2img*
desc : take web screenshots
usage : *${prefix}url2img [tipe] [url]*\n
command : *${prefix}simi*
desc : n sei oara que serve 
usage : *${prefix}simi yourmessage*\n
command : *${prefix}ocr*
desc : pegue o texto na foto
usage : responder imagem ou enviar imagem with caption\n
command : *${prefix}wait*
desc : pesquisar anime with image [ Qual anime é esse ? ]
usage : responder imagem ou enviar imagem with caption\n
command : *${prefix}setprefix*
desc : substituir prefix
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : This command can only be used by the bot owner\n
> *Comandos de Grupo* <
command : *${prefix}add*
desc : adicionar membro ao grupo
usage : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}kick*
desc : chutar membros do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : Dar adm a alguém
usage : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
command : *${prefix}demote*
desc : Retirar adm d alguém
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}linkgroup*
desc : pegue o link do grupo
usage : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin! \ n
command : *${prefix}leave*
desc : Make bot leave the group
usage : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot \ n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador de grupo \ n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo \ n`
}

exports.help = help
