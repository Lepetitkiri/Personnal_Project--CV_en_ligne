import React from 'react';

/** Composant fonctionnel représentant un interrupteur de catégorie.
 * Permet à l'utilisateur de basculer l'affichage global entre les modes DEV et CVC.
 */

const CategorySwitch = () => {
    return (
        <div className="CategorySwitch__container">
            <button type="button" className="CategorySwitch__btn">DEV</button>
            <button type="button" className="CategorySwitch__btn">CVC</button>
        </div>
    );
};

export default CategorySwitch;