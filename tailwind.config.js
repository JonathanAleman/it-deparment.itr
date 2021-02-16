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
          black:'#141313',
          blue:'#213EEA',
        },
        secondary:{
          'gray-10':'#777777',
          'gray-9': '#999999',
          'gray-6': 'rgba(255,255,255,0.6)',
          'black-10': 'rgba(119,119,119,0.1)',
          'purple-1':'#4132E4',
          'purple-2': '#786DF0',
        }
      },
      /*backgroundImage:{
        'teamwork':"url('/public/img/grupo.jpg')",
        'question': "url('/public/img/note.jpg')",
        
      }*/
    },
    
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
