import {Admin, Resource} from 'react-admin';
import {Dataprovider} from '@react-admin/ra-data-pocketbase';
import {List, Datagrid, TextField} from 'react-admin';

const App = () => (
  <Admin dataProvider={Dataprovider('http://localhost:8090')}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    </Admin>
);

const PostList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="title" />
      <TextField source="content" />
    </Datagrid>
  </List>
)