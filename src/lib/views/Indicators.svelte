<script>
	import { results, lastWeekTemp } from '../tools/stores.js';
  let sessions, users, sessionsLastWeek, usersLastWeek, sessionsRatio, usersRatio;

  const unsubscribe = results.subscribe((myData) => {
    const _ = results.subscribe((lastWeekResults) => {
      if (myData.length > 0) {
        sessions = myData.reduce((total, s) => total + s.sessions, 0);
        users = myData.reduce((total, s) => total + s.totalUsers, 0);
        sessionsLastWeek = lastWeekResults.reduce((total, s) => total + s.sessions, 0);
        usersLastWeek = lastWeekResults.reduce((total, s) => total + s.totalUsers, 0);
        sessionsRatio = Math.round(((sessions - sessionsLastWeek) / sessions + Number.EPSILON) * 100);
        usersRatio = Math.round(((users - usersLastWeek) / users + Number.EPSILON) * 100);
      }
    })
  })
</script>

<nav class="flex justify-center gap-x-8">
	<div class="flex-initial">
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{sessions} sessions</h5>
      <p class="font-normal">
        {#if sessionsRatio < 0}
          <p class="text-pink-700 text dark:text-pink-400">
            {sessionsRatio} %
          </p>
        {:else}
          <p class="text-green-700 text dark:text-green-400">
            + {sessionsRatio} %
          </p>
        {/if}
      </p>
      <p>{sessionsLastWeek} last week</p>
    </a>
	</div>
	<div class="flex-initial">
    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{users} users</h5>
      <p class="font-normal">
        {#if usersRatio < 0}
          <p class="text-pink-700 text dark:text-pink-400">
            {usersRatio} %
          </p>
        {:else}
          <p class="text-green-700 text dark:text-green-400">
            + {usersRatio} %
          </p>
        {/if}
      </p>
      <p>{usersLastWeek} last week</p>
    </a>

	</div>
</nav>

<br>
