const help = (prefix) => {
	return `=================Menu=================
	    ✞⃟❐͜͡bBlublebee✞⃟♔
	 Comandos de adesivos
comando : ${prefix}sticker or ${prefix}stiker
O que ele faz : converter imagem / gif / vídeo em adesivo
uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
comando : ${prefix}sticker nobg or ${prefix}stiker nobg
O que ele faz : trasforma foto em figurinha sem fundo\n
uso: responder imagem ou enviar imagem com legenda \n
comando : ${prefix}toimg
O que ele faz : converter adesivo em imagem
uso : adesivo de resposta\n
comando : ${prefix}tsticker or ${prefix}tstiker
O que ele faz: converter texto em adesivo
uso: ${prefix}tsticker (texto aqui)\n
=================Comandos Meme=================
comando: ${prefix}meme
O que ele faz: imagens aleatórias de meme [inglês]
uso : basta enviar o comando\n
comando : ${prefix}memeindo
O que ele faz : imagens aleatórias de meme [indo]
uso : basta enviar o comando\n
=================Outros Comandos=================
comando: ${prefix}gtts
O que ele faz : converter texto em fala / áudio
uso : ${prefix}gtts [cc] [text]\example : ${prefix}gtts pt é que eu sou imortal kkkkk\n
comando : ${prefix}loli
O que ele faz : imagens aleatórias de loli
uso : basta enviar o comando\n
comando : ${prefix}nsfwloli
O que ele faz : imagens aleatórias de nsfw loli
uso : apenas envie o comando\n
command : ${prefix}url2img
O que ele faz : tirar uma captura de tela da web
usage : ${prefix}url2img [tipe] [url]\n
comando : ${prefix}simi
desc : n sei oara que serve 
uso : ${prefix}simi sua mensagem\n
command : ${prefix}ocr
O que le faz : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
O que ele faz : pesquisar anime com imagem [ Qual anime é esse ? ]
uso : responder imagem ou enviar imagem com legenda\n
command : ${prefix}setprefix
O que ele faz : substituir prefix
uso : ${prefix}setprefix [text|optional]\nexample : ${prefix}setprefix ?
obs : Este comando só pode ser usado pelo proprietário do bot\n
=================Comandos de Grupo=================
comando : ${prefix}add
O que ele faz : adicionar membro ao grupo
uso : ${prefix}add 62813xxxxx\n
obs : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : ${prefix}kick
O que ele faz : expulsa membros do grupo
usage : ${prefix}kick @membro\n
obs : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : ${prefix}promote
O que ele faz : Da adm a alguém
uso : ${prefix}promote @membro\n
obs : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : ${prefix}demote
O que ele faz : Retirar adm de alguém
uso : ${prefix}demote @membro\n
obs : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : ${prefix}linkgroup
O que ele faz : pega o link do grupo
uso : apenas envie o comando
obs : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : ${prefix}leave
O que ele faz : Faça o bot sair do grupo
uso : apenas envie o comando
obs : Só pode ser usado por administradores de grupo e proprietário do bot\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : apenas envie o comando
note : Este comando pode ser usado se você for um administrador de grupo\n
comando : ${prefix}simih
O que ele faz : ativa o modo simi no grupo
uso : ${prefix}simih 1 para ativar o modo simi e ${prefix}simih 0 para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
