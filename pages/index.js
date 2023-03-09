import Link from "next/link";

export default function Home() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Lisez les articles</h5>
            <p className="card-text">
              Maximisez votre culture web Chaque auteur tente de vous apporter
              le plus de valeur possible par article.
            </p>
            <Link href="/blog" className="btn btn-primary">
              Visiter le blog{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Faites un tour vers la liste de membres
            </h5>
            <p className="card-text">
              Ajoutez, invitez et discutez avec les différents membres.
            </p>
            <Link href="/liste" className="btn btn-primary">
              Découvre la liste de membres{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
//  https://jsonplaceholder.typicode.com/photos
//  https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
