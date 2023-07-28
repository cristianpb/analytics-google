<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="title">{sessions}</p>
          <p class="heading">sessions</p>
          {#if sessionsRatio < 0}
            <p class="title is-size-5 has-text-danger">
              {sessionsRatio} %
            </p>
          {:else}
            <p class="title is-size-5 has-text-success">
              + {sessionsRatio} %
            </p>
          {/if}
          <br>
          <p>{sessionsLastWeek} last week</p>
        </div>
      </div>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="title">{users}</p>
          <p class="heading">users</p>
          {#if usersRatio < 0}
            <p class="title is-size-5 has-text-danger">
              {usersRatio} %
            </p>
          {:else}
            <p class="title is-size-5 has-text-success">
              + {usersRatio} %
            </p>
          {/if}
          <br>
          <p>{usersLastWeek} last week</p>
        </div>
      </div>
    </div>
  </div>
</nav>

<script>
  import { results, lastWeekTemp } from '../tools/stores.js';

  $: sessions = $results.reduce((total, s) => total + s.sessions, 0)
  $: users = $results.reduce((total, s) => total + s.totalUsers, 0)
  $: sessionsLastWeek = $lastWeekTemp.reduce((total, s) => total + s.sessions, 0)
  $: usersLastWeek = $lastWeekTemp.reduce((total, s) => total + s.totalUsers, 0)
  $: sessionsRatio = Math.round(((sessions-sessionsLastWeek)/(sessions) + Number.EPSILON) * 100)
  $: usersRatio = Math.round(((users-usersLastWeek)/(users) + Number.EPSILON) * 100)

</script>
