const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function findNodeLowestCost(cost, processed) {
  let lowestCost = 100000000;
  let lowestNode;

  Object.keys(cost).forEach((node) => {
    let costs = cost[node];

    if (costs < lowestCost && !processed.includes(node)) {
      lowestCost = costs;
      lowestNode = node;
    }
  });

  return lowestNode;
}

function shortPath(graph, start, end) {
  const cost = {};
  const processed = [];
  let neighbours = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      cost[node] = value || 100000000;
    }
  });

  let node = findNodeLowestCost(cost, processed);

  while (node) {
    const costs = cost[node];
    neighbours = graph[node];

    Object.keys(neighbours).forEach((neighbour) => {
      let newCost = costs + neighbours[neighbour];

      if (newCost < cost[neighbour]) {
        cost[neighbour] = newCost;
      }
    });

    processed.push(node);
    node = findNodeLowestCost(cost, processed);
  }
  return cost;
}

console.log(shortPath(graph, 'a', 'g'));
