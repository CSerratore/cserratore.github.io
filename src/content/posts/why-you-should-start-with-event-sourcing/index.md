---
slug: start-with-event-sourcing
title: Why You Should Start With Event Sourcing
date: 2022-12-24
author: Cory Serratore
image: ./thumbnail.png
imageAlt: A diagram of the design pattern method.
summary: The digital economy is based on the currency of data. Data is also the most dynamic and volatile aspect of any software system.
articleURL: https://buttondown.email/CorySerratore/archive/why-you-should-start-with-event-sourcing/
---

## Data is Currency

Without data, there is nothing.

The digital economy is based on the currency of data.

Value, in the form of data, is created, transformed, and exchanged by users and the products and services they interact with within the digital economy.

Data is also the most dynamic and volatile aspect of any software system.

## Responsiveness to Change

Almost every change to a software system will involve considerations of how to model data, mutate data, display data, accept data inputs, and move data between components and their interfaces.

Every software product has a life cycle. It is conceived, launched and—if successful—is improved and maintained until it is eventually retired or replaced.

The most common reason for retiring or replacing a digital product is because it is insufficiently responsive to change. Operational responsiveness of changes to data within the system  and responsiveness to changes to the system itself.

Therefore, the goal for the architecture of a software system is to be flexible and consistently responsive to change over time.

One objective towards this goal is also an architecture principle. Defer significant design decisions, such as relational schema design, as long as possible, until they must be made and are as informed as possible.

## The Big Problem

Many software systems struggle with a lack of responsiveness to change because of an early commitment to a persistence model based on:

- entity state
- an object/relational mapping and schema design

So why do so many digital products and services, especially those that claim to follow agile development practices, start from a premise of entity state and object/relational persistence?

The single most important component of a software system—the source of truth of data—is most often committed to a persistence model that is arguably the most resistant and the least responsive to change.

## Influential Forces

- Most software systems are developed using agile practices in which requirements and expectations evolve based on a feedback loop of small frequent releases.
- Almost every component of a typical software system prefers a different view of the data it interacts with.
- The relational database model is one of the most impactful innovations of computer science and the software industry. It is an incredibly expressive, capable and flexible model, as far as its adaptability to both transactional and analytical use cases.
  - It is not, however, a flexible model that is responsive to changes to the structure and relationships of the data.
  - Relational models are relatively rigid in their design, and require a relatively high level of skill and upfront modeling decisions to consistently achieve operational responsiveness.

## The Solution

1. Apply the Command Query Responsibility Segregation (CQRS) pattern to separate query (read) and command (write) domain and persistence models.
2. Apply an **Event Sourcing** pattern as the command model to persist state change events that result from entity commands.
3. Generate projections or *materialized views* of the event store data as the query model.

Event Sourcing is a persistence-related architecture pattern based on the premise of persisting a sequence of state-changing events instead of only the current state of a business entity.

When the state of an entity changes, a new event is appended to an event store before applying it to the current in-memory state of the entity as a single atomic operation.

An event store is simply an append only database of events and may be implemented using various technologies both relational and NoSQL.

When the application needs to reconstruct an entity's current state, it does so by replaying the ordered sequence of persisted events from the event store.

An event sourcing pattern is most often applied in combination with CQRS. The event store represents the state-changing results of entity commands. *Projections* of the event store data are typically used to support queries of domain data.

A projection is a transformation of data from one representation, such as an event store, to a representation that is optimal for the responsiveness of the query.

A projection may take on many implementation forms, from in-memory to a persistent NoSQL document or a normalized or de-normalized relational persistent model.

A projection may also be updated using methods that are either transactional or eventual consistent with the event store, depending on considerations such as latency tolerances of the commands and queries.

## The Benefit

An event sourced persistence model is very flexible and responsive to change, allowing entity command state changes to be persisted using a simple and general purpose model, while deferring query model decisions until they are known and required.

 Changes to the command model, whether it's the introduction of new events or changes to event definitions, is easily accommodated via simple event type and version meta data. Serialization and deserialization is the application's concern, so changes do not impact the structure of the persistence model.

Materialized views are loosely coupled projections sourced from the event store, allowing for changes to be made to the query model independently of the command model. Materialized views may rely on incremental tailing of the event store or, if required, replays from any point within the event store.

## Issues and Mitigation

- Event store volume may impact responsiveness due to the processing time and resource usage to step through a large number of events.

  - Snapshots of the entity or projection state at specific thresholds or intervals may be implemented to reduce the volume of events that need to be processed.
  - A sharding pattern may be applied to divide the event store into horizontal partitions or shards, each maintaining a distinct subset of event data.

- Eventual consistency between the command and query models may result in queries against stale data.

  - Use cases must consider both latency and consistency tolerances.
  - Eventual consistency reduces both command and query latency, improving responsiveness, at the expense of consistency between the two models.
  - Strong consistency may possible, but at the expense of increased latency and reduced responsiveness.

- Both CQRS and event sourcing are often perceived as more complicated.

  - The perceived complexity is often based on a lack of familiarity compared to traditional entity state object-relational (O/R) persistence.
  - Entity state O/R persistence simply moves the complexity to different places, such as in O/R middleware and to the database itself to manage additional transactional isolation and blocking concerns.
  - CQRS and event sourcing patterns improve discipline by enforcing a separation of command and query concerns, avoiding many of the pitfalls that traditional entity state O/R designs fall into that negatively impact responsiveness. This also extends into a separation of OLTP and OLAP concerns.

## Related Patterns

- CQRS pattern
- Materialized View pattern
- Sharding pattern
  
## Conclusion

So, we've learned how event sourcing is a more flexible premise to explore domains, is more responsive to change, and is easier to reason about and optimize because of the explicit separation of concerns.

With familiarity, it will likely become not only second nature, but a preferred starting point for new applications.

— Cory Serratore
