import React, { useContext } from 'react';
import { SwitchContainer, SwitchButton, SlidingPill } from './Style';
import { MyContextForBasenameValue } from '../../index.js';

/** Composant fonctionnel représentant un interrupteur de catégorie.
 * Permet à l'utilisateur de basculer l'affichage global entre les modes DEV et CVC.
 */

const CategorySwitch = () => {
    // On récupère la catégorie active et la fonction pour la modifier
    const { activeCategory, setActiveCategory } = useContext(MyContextForBasenameValue);

    return (
        <SwitchContainer>
            <SlidingPill active={activeCategory} />
            {/* Bouton CVC : devient actif si activeCategory est égal à 'CVC' */}
            <SwitchButton
                type="button"
                isActive={activeCategory === 'CVC'}
                onClick={() => setActiveCategory('CVC')}
            >
                CVC
            </SwitchButton>

            {/* Bouton DEV : devient actif si activeCategory est égal à 'Dev' */}
            <SwitchButton
                type="button"
                isActive={activeCategory === 'Dev'}
                onClick={() => setActiveCategory('Dev')}
            >
                DEV
            </SwitchButton>
        </SwitchContainer>
    );
};

export default CategorySwitch;