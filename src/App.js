import React from 'react';

import Accordion from './components/common/Accordion/Accordion';
import Section from './components/common/Accordion/Section';
import Panel from './components/common/Accordion/Panel';

const App = () => {
  return (
    <div>
      <Accordion>
        <Section title="Section 1">
          <Panel>
            <p>This is a test for panel 1....</p>
          </Panel>
        </Section>
        <Section title="Section 2">
          <Panel>
            <p>This is a test for panel 1....</p>
          </Panel>
        </Section>
        <Section title="Section 3">
          <Panel>
            <p>This is a test for panel 1....</p>
          </Panel>
        </Section>
      </Accordion>
    </div>
  );
}

export default App;
