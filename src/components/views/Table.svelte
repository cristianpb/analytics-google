{#if tableRows}
  <div class="table-container">
    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Day</th>
          <th>Country</th>
          <th>City</th>
          <th>Page path</th>
          <th>Devices</th>
          <th>Referrer</th>
          <th>Sessions</th>
          <th>Users</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.values(tableRows) as row }
          <tr>
            <td>{row.day.substring(6,8)}/{row.day.substring(4,6)}/{row.day.substring(0,4)}</td>
            <td>{row.country}</td>
            <td>{row.city}</td>
            <td>{row.pagePath}</td>
            <td>{row.device}</td>
            <td>{row.pageReferrer}</td>
            <td>{row.sessions}</td>
            <td>{row.totalUsers}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}

<script>
  import { results } from '../tools/stores.js';
  
  let tableRows;

  const unsubscribe = results.subscribe(myData => {
    if (myData.length > 0) {
      tableRows = myData.slice(0,20)
    }
  })


</script>
