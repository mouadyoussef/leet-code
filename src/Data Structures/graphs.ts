const airports: string[] = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');

const routes: Array<[string, string]> = [
  ['PHX', 'LAX'],
  ['PHX', 'JFK'],
  ['JFK', 'OKC'],
  ['JFK', 'HEL'],
  ['JFK', 'LOS'],
  ['MEX', 'LAX'],
  ['MEX', 'BKK'],
  ['MEX', 'LIM'],
  ['MEX', 'EZE'],
  ['LIM', 'BKK'],
];

// The graph
const adjancencyList = new Map<string, string[]>();

// Add node
function addNode(airport: string) {
  adjancencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin: string, destionation: string) {
  adjancencyList.get(origin).push(destionation);
  adjancencyList.get(destionation).push(origin);
}

// Create the graph
airports.forEach(addNode);
routes.forEach(route => addEdge(...route));

console.log(adjancencyList);

function bfs(start: string, finish: string) {

  const visited = new Set();
  const queue = [start];

  while (queue.length > 0) {
    const airport = queue.shift();

    const destinations = adjancencyList.get(airport);

    for (const destination of destinations) {
      if (destination === finish) {
        console.log('Found it !!');
      }

      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
}

function dfs(start:string, visited = new Set(), steps = 0) {
  ++steps;
  visited.add(start);

  const destinations = adjancencyList.get(start);

  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log(`Found BKK in ${steps} !!`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited, steps);
    }
  }
}

//bfs('PHX', 'BKK');
dfs('PHX');
