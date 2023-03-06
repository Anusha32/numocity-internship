const change = {
    eng: {
      temperature: 'Temperature',
      soc: 'State of Charge',
      chargeRate: 'Charge rate',
    },
    ger: {
      temperature: 'Temperatur',
      soc: 'Ladezustand',
      chargeRate: 'Ladegeschwindigkeit',
    },
    ja: {
        temperature: '温度',
        soc: '充電状態',
        chargeRate: '充電率',
    },
    kan: {
        temperature: 'ತಾಪಮಾನ',
        soc: 'ರಿಚರ್ಜ್ ಸ್ಥಿತಿ',
        chargeRate: 'ರಿಚರ್ಜ್ ದರ',
      },

  };
const lang= 'ger';

module.exports=change[lang];