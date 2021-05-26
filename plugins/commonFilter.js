import Vue from 'vue';
Vue.filter('truncateString', function (str, num) {
    

      if(str.length < num) return str
        
      return [...str].slice(0, num).filter(char => char !== '').join('') + '...'
 
})




