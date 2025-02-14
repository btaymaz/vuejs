<div> 
  <h2>{{ title }}</h2> 
  <p>{{ description }}</p> 
  <a v-if='link' :href='link'>{{ linkText }}</a> 
  <ul> 
    <li v-for='item in items' :key='item.title'> 
      <a :href='item.link'>{{ item.title }}</a> <p>{{ item.description }}</p> <p>{{ item.date }}</p> 
    </li>
  </ul>
</div>
