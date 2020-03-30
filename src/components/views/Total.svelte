<div>
  Total {total}
</div>

<script>
  import { data } from '../tools/stores.js'
  let total

  const unsubscribe = data.subscribe(myData => {
    total = myData.reduce((total, s) => total + s.sessions, 0);
  });
</script>
