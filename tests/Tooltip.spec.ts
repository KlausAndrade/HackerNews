import { render, fireEvent, screen } from '@testing-library/vue';
import Tooltip from '@/components/Tooltip.vue';

describe('Tooltip.vue', () => {
  it('renders the slot content', () => {
    render(Tooltip, {
      props: {
        text: 'Tooltip content',
      },
      slots: {
        default: '<button>Hover me!</button>',
      },
    });

    expect(screen.getByText('Hover me!')).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    render(Tooltip, {
      props: {
        text: 'Tooltip content',
      },
      slots: {
        default: '<button>Hover me!</button>',
      },
    });

    const button = screen.getByText('Hover me!');

    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
    await fireEvent.mouseOver(button);
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });

  it('adds aria-describedby to the trigger element', async () => {
    render(Tooltip, {
      props: {
        text: 'Accessible tooltip content',
      },
      slots: {
        default: '<button>Hover me!</button>',
      },
    });
  
    const button = screen.getByText('Hover me!');
    await fireEvent.mouseOver(button);
  
    const tooltip = screen.getByText('Accessible tooltip content');
    expect(tooltip).toHaveAttribute('id');
  });

  it('does not render tooltip if text is empty', async () => {
    render(Tooltip, {
      props: {
        text: '',
      },
      slots: {
        default: '<button>Hover me!</button>',
      },
    });
  
    const button = screen.getByText('Hover me!');
    await fireEvent.mouseOver(button);
  
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});