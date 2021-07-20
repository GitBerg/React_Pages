import './styles.css';
import { Component } from 'react';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../Utils/load-posts';


export class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>

    );
  }
}
