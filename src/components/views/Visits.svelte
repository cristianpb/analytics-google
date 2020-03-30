<p>Visits: </p>

{#if visits}
  {#each Object.entries(visits) as visit}
    <p on:click={event => onDelete(event)}>
      {visit[0]}
    </p>
    <p>: {visit[1]}
    </p>
  {/each}
{/if}

<script>
  import { data } from '../tools/stores.js';
  let visits;

  const unsubscribe = data.subscribe(myData => {
    if (myData.length > 0) {
      visits = myData.reduce((total, s) => {
        let day = `${s.dd.getFullYear()}${("0" + (s.dd.getMonth() + 1)).slice(-2)}${("0" + s.dd.getDate()).slice(-2)}`
        if (day in total) {
          total[day] += s.sessions;
        } else {
          total[day] = s.sessions;
        }
        return total
      }, {})
    }
  })

  function onDelete (event) {
    // if it's a custom event you can get the properties passed to it:
    const customEventData = event.detail

    // if you want the element, you guessed it:
    const innerHTML = event.target.innerHTML
    //console.log(customEventData);
    console.log(innerHTML);
    data.update(v => v.filter(x => x.day === innerHTML))
  }

</script>
