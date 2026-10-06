# Team member photos

Portrait photos for the leadership grid are not bundled with the project. Until the real
portraits are added, each card renders a neutral initials placeholder.

To use a real portrait, drop the image in this folder and set the `photo` property of that
member in `src/data/team.ts`:

```ts
{
  id: "huseyn-abdullayev",
  name: "HÜSEYN ABDULLAYEV",
  role: "Sədr",
  photo: "/assets/team/huseyn-abdullayev.jpg",
}
```

Recommended format: portrait crop, 4:5 ratio, at least 800 x 1000 px.
