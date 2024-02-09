2/9 progress
 - [ ] Get Person and License relation to work. Currently, the PK/FK and @HasOne/@BelongsTo aren't working. Having @BelongsTo in License causes startup errors.

1/24/24 progress
 - [ ] Add an additional class that will serve as a one-to-many relation.
 - [ ] Add an additional class that will serve as a many-to-many relation.
 - [ ] Use a more thorough query against the database.


1/22/24 progress
 - [x] Having Person.init causes runtime failures, but not having it doesn't build the table properly and causes a forced PK of "id" to get created
 - [ ] Aliases aren't working as expected.
