import PropTypes from 'prop-types';
import getFilmDuration from '@helpers/getFilmDuration';
import cn from 'classnames';
import { UIRating } from '../UI';

import styles from './FilmItem.module.scss';
import { memo } from 'react';

export const FilmItem = memo(
     ({ item, clas }) => {
          const { poster, name, alternativeName, year, movieLength, rating } = item;
          const filmDuration = getFilmDuration(movieLength);


          return (
               <div className={cn(styles.item, clas)}>
                    <div className={cn(styles.item__pic, {
                         [styles.item__no_pic]: poster
                    })}>
                         { poster ? <img src={poster.previewUrl} alt={name || alternativeName} /> : ''}
                    </div>
                    <div className={styles.item__info}>
                         <p className={styles.item__title}>{name || alternativeName}</p>
                         <div className={styles.item__info_bot}>
                              <p className={styles.item__year}>
                                   {year} 
                              </p>
                              <p className={styles.item__duration}>
                                   {movieLength ? filmDuration : "Сериал"}
                              </p>
                         </div>
                    </div>
                    <UIRating type="medium" text={rating.kp.toFixed(1)}/>
               </div>
          )
     }
);

FilmItem.propTypes = {
     item: PropTypes.object,
     clas: PropTypes.string
};