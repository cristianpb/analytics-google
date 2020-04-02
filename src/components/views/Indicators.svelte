<nav class="level is-mobile">
  <div class="level-item has-text-centered">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="title">{sessions}</p>
          <p class="heading">sessions</p>
          <p class:has-text-danger={sessionsRatio < 0}
             class:has-text-link={sessionsRatio > 0}
             class="title is-size-5">{sessionsRatio} %</p>
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
          <p class:has-text-danger={usersRatio < 0}
             class:has-text-link={usersRatio > 0}
             class="title is-size-5">{usersRatio} %</p>
          <br>
          <p>{usersLastWeek} last week</p>
        </div>
      </div>
    </div>
  </div>
</nav>

<script>
  import { data as dataCsv, results, lastWeek } from '../tools/stores.js';

  $: sessions = $dataCsv.reduce((total, s) => total + s.sessions, 0)
  $: users = $dataCsv.reduce((total, s) => total + 1, 0)
  $: sessionsLastWeek = $lastWeek.reduce((total, s) => total + s.sessions, 0)
  $: usersLastWeek = $lastWeek.reduce((total, s) => total + 1, 0)
  $: sessionsRatio = Math.round(((sessions-sessionsLastWeek)/(sessions) + Number.EPSILON) * 100) / 100
  $: usersRatio = Math.round(((users-usersLastWeek)/(users) + Number.EPSILON) * 100) / 100

</script>
