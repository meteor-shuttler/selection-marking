# Selection Marking

[GitHub](https://github.com/meteor-shuttler/selection-marking) [Atmosphere.js](atmospherejs.com/shuttler/selection-marking)

Marking documents if has selected link in the graph.

## Install

```
meteor add shuttler:selection-marking
```

##### Required
* [shuttler:ref](https://github.com/meteor-shuttler/ref)
* [shuttler:graphs](https://github.com/meteor-shuttler/graphs)
* [shuttler:graph-marking](https://github.com/meteor-shuttler/graph-marking)

## Documentation

### Selection

#### .marking
> (name: String, options: Options) => Shuttler.GraphMarking

It creates and return a an instance of maintaining marking of documents in graph.

To the `Shuttler.GraphMarking` instance will be added `_selection` field with instance of [Shuttler.Selection](https://github.com/meteor-shuttler/selection#new-shuttlerselection)

[Shuttler.GraphMarking documentation](https://github.com/meteor-shuttler/graph-marking).

##### Options

This package has prepared options to send into marking constructor:

* `Shuttler.GraphMarking.bySelectedSource`
* `Shuttler.GraphMarking.bySelectedTarget`
* `Shuttler.GraphMarking.bySelectorSource`
* `Shuttler.GraphMarking.bySelectorTarget`