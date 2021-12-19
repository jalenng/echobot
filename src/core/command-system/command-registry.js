const commands = new Map()
const commandsDesc = []

/**
 * Registers a command into the command system
 *
 * @param {String[]} keywords The keywords to bind
 * @param {*} func The function to bind
 */
function registerCommand (cmdProps) {
  const keyword = cmdProps.keyword

  commands[keyword] = {
    name: keyword,
    func: cmdProps.func,
    description: cmdProps.description ? cmdProps.description : cmdProps.keyword,
    options: cmdProps.options ? cmdProps.options : []
  }

  commandsDesc.push({
    name: keyword,
    description: cmdProps.description ? cmdProps.description : cmdProps.keyword,
    options: cmdProps.options ? cmdProps.options : []
  })
};

module.exports.commands = commands
module.exports.commandsDesc = commandsDesc
module.exports.registerCommand = registerCommand