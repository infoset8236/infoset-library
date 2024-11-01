import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_B, PREV_B_X } from '../constants/smart.constants';
import Title from '../components/title';
import { TITLE_B } from '../constants/smart.constants';
import { SMART_B } from '../constants/smart_component.constants';
import Layout from '../components/layout';
import zoom from '../assets/img/zoom.svg';
import { useFullPageStore } from '../store/full_page.store';
import { useOrientationStore } from '../store/landscape.store';

export const Route = createFileRoute('/smart/b')({
  component: SmartTypeB,
});

function SmartTypeB() {
  const [selectedId, setSelectedId] = useState(0);
  const { toggleFullPage, isFullPage } = useFullPageStore();
  const { isLandscape } = useOrientationStore();

  return (
    <>
      {isFullPage ? (
        <div
          className={isLandscape ? 'full' : 'full_y'}
          style={{
            backgroundImage: !isLandscape
              ? `url(${PREV_B[selectedId].img}) `
              : `url(${PREV_B_X[selectedId].img})`,
          }}
        >
          <img src={zoom} alt="" className={'zoom'} onClick={toggleFullPage} />
        </div>
      ) : (
        <Layout>
          <div className={'content'}>
            <Tab link={'smart'} />
            <Title title={TITLE_B[selectedId]} />
            <NavigationButton selectedId={selectedId} totalLength={5} onSelect={setSelectedId}>
              <SelectedComponent components={SMART_B} selectedId={selectedId} />
            </NavigationButton>
          </div>
          <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
        </Layout>
      )}
    </>
  );
}
