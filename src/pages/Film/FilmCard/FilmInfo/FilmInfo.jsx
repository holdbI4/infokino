import PropTypes from 'prop-types';
import { UITitle } from '@components/UI';
import Item from './Item/Item';
import styles from './FilmInfo.module.scss';

const FilmInfo = ({ data }) => {
     const info = [
          { label: "— ", value: `${data.slogan ? '«' + data.slogan + '»' : ''}` },
          { label: "Год: ", value: data.year, link: `/films/movie/?year=${data.year}` },
          { label: "Страны: ", value: data.countries, link: `/films/movie/?countries.name=` },
          { label: "Жанры: ", value: data.genres, link: `/films/movie/?genres.name=` },
          { label: "Актеры: ", value: data.persons.filter(item => item.enProfession === 'actor'), link: '/name/' },
          { label: "Режиссёры: ", value: data.persons.filter(item => item.enProfession === 'director'), link: '/name/' },
          { label: "Редакторы: ", value: data.persons.filter(item => item.enProfession === 'writer'), link: '/name/' }
     ];

     return (
          <div className={styles.info}>
               <div className={styles.header}>
                    <UITitle title={data.name}/>
                    <p className={styles.altName}>{data.alternativeName}</p>
               </div>
               <ul className={styles.list}>
                    { info.map(item => <Item key={item.label} label={item.label} value={item.value} link={item.link}/>) }
               </ul>
               <div className={styles.description}>
                    <UITitle title="Описание: "/>
                    <div className={styles.description_body}>
                         {data.description}
                    </div>
               </div>
          </div>
     );
};

export default FilmInfo;

FilmInfo.propTypes = {
     data: PropTypes.object
};