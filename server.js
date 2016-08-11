console.log('Starting beacon...')
require('eddystone-beacon').advertiseUrl('https://goo.gl/rnl4Lx', { name: 'Metro Transit Stop' })
console.log('Beacon started. Press ^C to stop.')
