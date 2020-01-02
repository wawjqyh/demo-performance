function sleep(time) {
  let endTime = new Date().getTime() + time * 1000;

  while (new Date().getTime() < endTime) {
    // sleep
  }
}

sleep(1);
