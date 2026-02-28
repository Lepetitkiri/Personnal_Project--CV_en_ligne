import React from 'react';
import { SwitchContainer, SwitchButton } from './Style';

/** Composant fonctionnel représentant un interrupteur de catégorie.
 * Permet à l'utilisateur de basculer l'affichage global entre les modes DEV et CVC.
 */

const CategorySwitch = () => {
    return (
        <SwitchContainer>
            {/* On ajoute manuellement la classe "active" sur l'un pour tester le design */}
            <SwitchButton type="button" className="active">DEV</SwitchButton>
            <SwitchButton type="button">CVC</SwitchButton>
        </SwitchContainer>
    );
};

export default CategorySwitch;