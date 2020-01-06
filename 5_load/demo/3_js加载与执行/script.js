function sleep(time) {
  let endTime = new Date().getTime() + time * 1000;

  while (new Date().getTime() < endTime) {}
}

// 通过死循环阻塞
sleep(3);
