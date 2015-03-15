
var treeify = require('treeify'),
    fs = require('fs'),
chalk = require('chalk');
var Eukaryotes = {
    'asdasdsa':{
        'Green plants': 'green algae & land plants',
        'Rhodophyta': 'red algae',
        'Glaucophytes': 'microalgae'
    },
    'Unikonts': {
        'Opisthokonts': {
            'Animals': null,
            'Choanoflagellates': null,
            'Filasterea': null,
            'Ichthyosporea': null,
            'Fungi': 'mushrooms, sac fungi, yeast, molds, etc',
            'Nucleariidae': 'filose amoebae'
        },
        'Amoebozoa': 'amoebae, slime molds, and parasitic protists',
    },
    'Chromalveolates': {
        '': {
            'Rhizaria': {
                'Cercozoa': 'amoeboflagellates',
                'Foraminifera': 'complex cells with reticulopodia',
                'Radiolaria': null
            },
            'Alveolates': 'dinoflagellates, ciliates and apicomplexan parasites',
            'Stramenopiles': 'e.g. water molds, diatoms, brown algae'
        },
        'Hacrobia': 'Haptophyta, Cryptomonads, etc.'
    },
    'Excavates': {
        'Malawimonads': null,
        'Discicristates': {
            'Euglenozoa': 'euglenids, diplonemids and kinetoplastids',
            'Heterolobosea': 'amoeboflagellates with discoidal mitchondrial cristae',
            'Jakobida': 'free-living, heterotrophic flagellates'
        },
        'Parabasalids': 'trichomonads and hypermastigotes',
        'Fornicata': 'diplomonads and retortamonads',
        'Preaxostyla': 'oxymonads and Trimastix'
    }
};

var j = fs.readFileSync('/tmp/Thurs/cetus/zpoolList.json').toString();
Eukaryotes = JSON.parse(j);
treeify.asLines(Eukaryotes, true, function(line) {
       console.log(chalk.grey.bgWhite(line));
});

var tree = require('pretty-tree');

var str = tree({
        label: '(root)', // the label of this node
        nodes: [{
                    label: '(child)',
            leaf: {
                            hello: 'world',
                hej: 'verden'
            }
    }]
});

console.log(str);
