function dijkstra(graph,start){
    const distance = {};
    const queue = []
    let visted = new Set ()

    for (let v in graph ){
        if(v===start){
            distance[v]=0
        }else {
            distance[v]= infinity ;
        }
        queue.push(v);
    }
    while(queue.length >0){
        let mindistance = infinity ; 
        let minvertex = null ; 
        for(let vertex of queue){
            if(distance[vertex]< mindistance) {
              mindistance = distances[vertex];
              minvertex = vertex ;   
            }
        }
        if(minvertex===null){
            break ;
        }
        queue.splice(queue.indexOf(minvertex) , 1);
        visted.add(minvertex);
        for(let noeud in graph[minvertex]){
            if(!visited.has(noeud)){
                let newdistance = distance[minvertex] + graph[minvertex][noeud];
                if(newdistance< distance[noeud]){
                    distance[noeud] = newdistance ; 
                }
            }
        }
    }
    return distance ;
}

const graph = {
    'A': { 'B': 4, 'C': 2 },

    'B': { 'A': 4, 'C': 5, 'D': 10 },
 
    'C': { 'A': 2, 'B': 5, 'D': 3 },
 
    'D': { 'B': 10, 'C': 3 }
 
 };