# How To Design Google Docs

## Concurrency

Basically, the server can keep 2 copies of the same doc to each person and tracks the full revision history as well. When A edits the doc by adding “x” in the beginning, this change will be sent to the server together with the last revision seen by A. Suppose at this time, B deletes the last character “c” and this change is sent to the server as well.

Since the server knows the change is made on which revision, it will adjust the change accordingly. More specifically, B’s change is deleting the 3rd character “c”, which will be transformed to deleting the 4th character as A adds “x” in the beginning.