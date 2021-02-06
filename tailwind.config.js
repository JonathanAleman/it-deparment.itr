module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat'],
      },
      colors:{
        primary:{
          purple:'#4132E4'
        },
        secondary:{
          gray:'#777777',
        }
      },
      backgroundImage:{
        'teamwork':"url('/public/img/grupo.jpg')"
      }
    },
    
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
