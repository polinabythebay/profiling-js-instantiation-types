## Profiling JavaScript instantiation patterns

### The four patterns

JavaScript has 4 different object instantiation patterns. Instead of having classes, JavaScript implements functional classes (constructor functions) to generate multiple objects with similar properties and methods.

Each functional constructor performs the four basic operations:

- creates an object
- assigns the object properties
- adds methods to the object
- returns the object

Here is a basic description of each style:

**Functional**: 

- A simple "maker" pattern.
- Does not use `new`, `this`, or prototype chains.
- Generate, assign properties, and define methods all within one function.
- There are no methods delegated to fallback object.

**Functional Shared**: 

- A simple "maker" pattern with shared methods.
- Does not use `new` or prototype chains.
- Use extend() to programmatically store all functions we plan to add on methods.

**Prototypal**:

- Uses `Object.create`.
- Does not use `new`.

**Psuedoclassical**:

- Creates instances with the keyword `new`.
- Does not declare or return the instance explicitly.

### Stacks and Queues

For this exercise I'm implementing stacks and queues in each instantiation pattern. I'm using [Chrome profiling tools](https://developers.google.com/web/tools/chrome-devtools/#profiles-panel-profile-execution-time-and-memory-usage) to compare the performance of each pattern. There are three interesting things you can take look at. 

### The CPU Profiler

The first is using the CPU profiler to investigate the run-time of your functions. You can access it by starting up a profile snapshot and reloading a page to capture it. 

Results from CPU profiler:

Analysis:

### The Heap Snapshot

The second thing you can look at that's interesting is the heap snapshot to investigate object allocation and memory use. 

Results from Heap Snapshot:

Analysis:

### The Heap Profiler

The third thing is interest is running the heap profiler to look at garbage collection behavior across instantiations.

Results from Heap Profiler:

Analysis:

### Conclusion

### Resources and Additional Reading

- http://www.ryanatkinson.io/javascript-instantiation-patterns/







