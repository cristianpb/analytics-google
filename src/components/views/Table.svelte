<p>
  Table
</p>

{#if tableRows}
  <table class="table is-hoverable">
    <thead>
      <tr>
        <th>Day</th>
        <th>Country</th>
        <th>City</th>
        <th>Page path</th>
        <th>Devices</th>
        <th>Sources</th>
        <th>Sessions</th>
      </tr>
    </thead>
    <tbody>
      {#each Object.values(tableRows) as row }
        <tr>
          <td>{row.day}</td>
          <td>{row.country}</td>
          <td>{row.city}</td>
          <td>{row.pagePath}</td>
          <td>{row.device}</td>
          <td>{row.source}</td>
          <td>{row.sessions}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}

<script>
  import { data as dataCsv } from '../tools/stores.js';
  
  let tableRows;

  const unsubscribe = dataCsv.subscribe(myData => {
    if (myData.length > 0) {
      tableRows = myData.slice(0,20)
    }
  })


</script>
